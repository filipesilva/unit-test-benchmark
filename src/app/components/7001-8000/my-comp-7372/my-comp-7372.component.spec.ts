import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7372Component } from './my-comp-7372.component';

describe('MyComp7372Component', () => {
  let component: MyComp7372Component;
  let fixture: ComponentFixture<MyComp7372Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7372Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7372Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
