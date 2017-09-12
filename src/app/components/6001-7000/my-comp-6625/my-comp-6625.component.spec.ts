import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6625Component } from './my-comp-6625.component';

describe('MyComp6625Component', () => {
  let component: MyComp6625Component;
  let fixture: ComponentFixture<MyComp6625Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6625Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6625Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
