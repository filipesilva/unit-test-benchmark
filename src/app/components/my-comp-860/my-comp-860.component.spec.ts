import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp860Component } from './my-comp-860.component';

describe('MyComp860Component', () => {
  let component: MyComp860Component;
  let fixture: ComponentFixture<MyComp860Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp860Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp860Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
