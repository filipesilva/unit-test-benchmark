import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7047Component } from './my-comp-7047.component';

describe('MyComp7047Component', () => {
  let component: MyComp7047Component;
  let fixture: ComponentFixture<MyComp7047Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7047Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7047Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
