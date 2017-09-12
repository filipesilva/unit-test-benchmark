import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp263Component } from './my-comp-263.component';

describe('MyComp263Component', () => {
  let component: MyComp263Component;
  let fixture: ComponentFixture<MyComp263Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp263Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp263Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
