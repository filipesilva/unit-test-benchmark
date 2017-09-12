import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6498Component } from './my-comp-6498.component';

describe('MyComp6498Component', () => {
  let component: MyComp6498Component;
  let fixture: ComponentFixture<MyComp6498Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6498Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6498Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
