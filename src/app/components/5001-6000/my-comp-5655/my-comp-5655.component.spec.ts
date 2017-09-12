import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5655Component } from './my-comp-5655.component';

describe('MyComp5655Component', () => {
  let component: MyComp5655Component;
  let fixture: ComponentFixture<MyComp5655Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5655Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5655Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
