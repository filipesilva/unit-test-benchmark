import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2503Component } from './my-comp-2503.component';

describe('MyComp2503Component', () => {
  let component: MyComp2503Component;
  let fixture: ComponentFixture<MyComp2503Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2503Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2503Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
