import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7096Component } from './my-comp-7096.component';

describe('MyComp7096Component', () => {
  let component: MyComp7096Component;
  let fixture: ComponentFixture<MyComp7096Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7096Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7096Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
