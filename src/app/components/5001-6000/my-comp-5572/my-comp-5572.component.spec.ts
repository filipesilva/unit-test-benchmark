import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5572Component } from './my-comp-5572.component';

describe('MyComp5572Component', () => {
  let component: MyComp5572Component;
  let fixture: ComponentFixture<MyComp5572Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5572Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5572Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
