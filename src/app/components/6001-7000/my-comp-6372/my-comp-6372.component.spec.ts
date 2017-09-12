import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6372Component } from './my-comp-6372.component';

describe('MyComp6372Component', () => {
  let component: MyComp6372Component;
  let fixture: ComponentFixture<MyComp6372Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6372Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6372Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
