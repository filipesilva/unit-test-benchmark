import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7501Component } from './my-comp-7501.component';

describe('MyComp7501Component', () => {
  let component: MyComp7501Component;
  let fixture: ComponentFixture<MyComp7501Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7501Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7501Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
