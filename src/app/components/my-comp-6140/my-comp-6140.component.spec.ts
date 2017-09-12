import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6140Component } from './my-comp-6140.component';

describe('MyComp6140Component', () => {
  let component: MyComp6140Component;
  let fixture: ComponentFixture<MyComp6140Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6140Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
