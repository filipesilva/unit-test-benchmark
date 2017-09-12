import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5763Component } from './my-comp-5763.component';

describe('MyComp5763Component', () => {
  let component: MyComp5763Component;
  let fixture: ComponentFixture<MyComp5763Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5763Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5763Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
