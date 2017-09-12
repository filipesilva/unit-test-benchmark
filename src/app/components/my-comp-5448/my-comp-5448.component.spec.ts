import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5448Component } from './my-comp-5448.component';

describe('MyComp5448Component', () => {
  let component: MyComp5448Component;
  let fixture: ComponentFixture<MyComp5448Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5448Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5448Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
