import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5929Component } from './my-comp-5929.component';

describe('MyComp5929Component', () => {
  let component: MyComp5929Component;
  let fixture: ComponentFixture<MyComp5929Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5929Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5929Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
