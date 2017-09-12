import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1737Component } from './my-comp-1737.component';

describe('MyComp1737Component', () => {
  let component: MyComp1737Component;
  let fixture: ComponentFixture<MyComp1737Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1737Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1737Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
