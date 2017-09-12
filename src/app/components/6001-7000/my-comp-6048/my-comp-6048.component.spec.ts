import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6048Component } from './my-comp-6048.component';

describe('MyComp6048Component', () => {
  let component: MyComp6048Component;
  let fixture: ComponentFixture<MyComp6048Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6048Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6048Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
