import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5415Component } from './my-comp-5415.component';

describe('MyComp5415Component', () => {
  let component: MyComp5415Component;
  let fixture: ComponentFixture<MyComp5415Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5415Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5415Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
