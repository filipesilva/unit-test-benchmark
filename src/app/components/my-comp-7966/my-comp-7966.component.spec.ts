import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7966Component } from './my-comp-7966.component';

describe('MyComp7966Component', () => {
  let component: MyComp7966Component;
  let fixture: ComponentFixture<MyComp7966Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7966Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7966Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
