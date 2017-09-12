import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2810Component } from './my-comp-2810.component';

describe('MyComp2810Component', () => {
  let component: MyComp2810Component;
  let fixture: ComponentFixture<MyComp2810Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2810Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2810Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
