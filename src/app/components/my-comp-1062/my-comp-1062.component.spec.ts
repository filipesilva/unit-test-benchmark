import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1062Component } from './my-comp-1062.component';

describe('MyComp1062Component', () => {
  let component: MyComp1062Component;
  let fixture: ComponentFixture<MyComp1062Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1062Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1062Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
