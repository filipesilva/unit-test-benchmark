import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7517Component } from './my-comp-7517.component';

describe('MyComp7517Component', () => {
  let component: MyComp7517Component;
  let fixture: ComponentFixture<MyComp7517Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7517Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7517Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
