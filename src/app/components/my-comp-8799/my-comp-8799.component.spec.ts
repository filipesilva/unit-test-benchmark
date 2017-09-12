import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8799Component } from './my-comp-8799.component';

describe('MyComp8799Component', () => {
  let component: MyComp8799Component;
  let fixture: ComponentFixture<MyComp8799Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8799Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8799Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
