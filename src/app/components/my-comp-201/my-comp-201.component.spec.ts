import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp201Component } from './my-comp-201.component';

describe('MyComp201Component', () => {
  let component: MyComp201Component;
  let fixture: ComponentFixture<MyComp201Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp201Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
