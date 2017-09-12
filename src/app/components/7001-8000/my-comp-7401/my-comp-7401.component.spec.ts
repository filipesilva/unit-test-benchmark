import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7401Component } from './my-comp-7401.component';

describe('MyComp7401Component', () => {
  let component: MyComp7401Component;
  let fixture: ComponentFixture<MyComp7401Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7401Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
