import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7058Component } from './my-comp-7058.component';

describe('MyComp7058Component', () => {
  let component: MyComp7058Component;
  let fixture: ComponentFixture<MyComp7058Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7058Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7058Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
