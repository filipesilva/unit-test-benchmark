import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp228Component } from './my-comp-228.component';

describe('MyComp228Component', () => {
  let component: MyComp228Component;
  let fixture: ComponentFixture<MyComp228Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp228Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp228Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
