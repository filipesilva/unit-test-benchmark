import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp366Component } from './my-comp-366.component';

describe('MyComp366Component', () => {
  let component: MyComp366Component;
  let fixture: ComponentFixture<MyComp366Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp366Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp366Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
