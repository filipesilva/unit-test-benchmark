import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5628Component } from './my-comp-5628.component';

describe('MyComp5628Component', () => {
  let component: MyComp5628Component;
  let fixture: ComponentFixture<MyComp5628Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5628Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5628Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
