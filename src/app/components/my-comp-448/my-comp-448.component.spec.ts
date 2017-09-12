import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp448Component } from './my-comp-448.component';

describe('MyComp448Component', () => {
  let component: MyComp448Component;
  let fixture: ComponentFixture<MyComp448Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp448Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp448Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
