import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5006Component } from './my-comp-5006.component';

describe('MyComp5006Component', () => {
  let component: MyComp5006Component;
  let fixture: ComponentFixture<MyComp5006Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5006Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
