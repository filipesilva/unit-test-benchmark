import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp352Component } from './my-comp-352.component';

describe('MyComp352Component', () => {
  let component: MyComp352Component;
  let fixture: ComponentFixture<MyComp352Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp352Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp352Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
