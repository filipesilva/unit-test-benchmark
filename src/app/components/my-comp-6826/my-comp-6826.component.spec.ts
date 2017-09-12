import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6826Component } from './my-comp-6826.component';

describe('MyComp6826Component', () => {
  let component: MyComp6826Component;
  let fixture: ComponentFixture<MyComp6826Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6826Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6826Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
