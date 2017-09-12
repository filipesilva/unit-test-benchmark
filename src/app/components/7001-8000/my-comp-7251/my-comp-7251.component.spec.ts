import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7251Component } from './my-comp-7251.component';

describe('MyComp7251Component', () => {
  let component: MyComp7251Component;
  let fixture: ComponentFixture<MyComp7251Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7251Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7251Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
