import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1182Component } from './my-comp-1182.component';

describe('MyComp1182Component', () => {
  let component: MyComp1182Component;
  let fixture: ComponentFixture<MyComp1182Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1182Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
