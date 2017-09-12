import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3967Component } from './my-comp-3967.component';

describe('MyComp3967Component', () => {
  let component: MyComp3967Component;
  let fixture: ComponentFixture<MyComp3967Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3967Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3967Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
