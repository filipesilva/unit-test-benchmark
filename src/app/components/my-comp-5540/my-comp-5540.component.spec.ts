import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5540Component } from './my-comp-5540.component';

describe('MyComp5540Component', () => {
  let component: MyComp5540Component;
  let fixture: ComponentFixture<MyComp5540Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5540Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5540Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
