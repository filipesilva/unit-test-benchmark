import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp685Component } from './my-comp-685.component';

describe('MyComp685Component', () => {
  let component: MyComp685Component;
  let fixture: ComponentFixture<MyComp685Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp685Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp685Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
