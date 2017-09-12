import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5058Component } from './my-comp-5058.component';

describe('MyComp5058Component', () => {
  let component: MyComp5058Component;
  let fixture: ComponentFixture<MyComp5058Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5058Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5058Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
