import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7568Component } from './my-comp-7568.component';

describe('MyComp7568Component', () => {
  let component: MyComp7568Component;
  let fixture: ComponentFixture<MyComp7568Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7568Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7568Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
