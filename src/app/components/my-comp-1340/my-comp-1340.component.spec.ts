import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1340Component } from './my-comp-1340.component';

describe('MyComp1340Component', () => {
  let component: MyComp1340Component;
  let fixture: ComponentFixture<MyComp1340Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1340Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1340Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
