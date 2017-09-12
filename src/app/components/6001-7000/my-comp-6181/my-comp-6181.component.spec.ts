import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6181Component } from './my-comp-6181.component';

describe('MyComp6181Component', () => {
  let component: MyComp6181Component;
  let fixture: ComponentFixture<MyComp6181Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6181Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
