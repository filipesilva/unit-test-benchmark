import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6226Component } from './my-comp-6226.component';

describe('MyComp6226Component', () => {
  let component: MyComp6226Component;
  let fixture: ComponentFixture<MyComp6226Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6226Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6226Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
