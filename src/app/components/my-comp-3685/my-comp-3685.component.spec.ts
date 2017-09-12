import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3685Component } from './my-comp-3685.component';

describe('MyComp3685Component', () => {
  let component: MyComp3685Component;
  let fixture: ComponentFixture<MyComp3685Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3685Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3685Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
