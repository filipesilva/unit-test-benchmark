import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7995Component } from './my-comp-7995.component';

describe('MyComp7995Component', () => {
  let component: MyComp7995Component;
  let fixture: ComponentFixture<MyComp7995Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7995Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7995Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
