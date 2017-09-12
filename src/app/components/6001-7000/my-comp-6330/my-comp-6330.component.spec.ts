import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6330Component } from './my-comp-6330.component';

describe('MyComp6330Component', () => {
  let component: MyComp6330Component;
  let fixture: ComponentFixture<MyComp6330Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6330Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6330Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
