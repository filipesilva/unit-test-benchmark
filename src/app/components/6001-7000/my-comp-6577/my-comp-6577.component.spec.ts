import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6577Component } from './my-comp-6577.component';

describe('MyComp6577Component', () => {
  let component: MyComp6577Component;
  let fixture: ComponentFixture<MyComp6577Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6577Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6577Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
