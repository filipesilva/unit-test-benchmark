import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6823Component } from './my-comp-6823.component';

describe('MyComp6823Component', () => {
  let component: MyComp6823Component;
  let fixture: ComponentFixture<MyComp6823Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6823Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6823Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
