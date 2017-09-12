import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5483Component } from './my-comp-5483.component';

describe('MyComp5483Component', () => {
  let component: MyComp5483Component;
  let fixture: ComponentFixture<MyComp5483Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5483Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5483Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
