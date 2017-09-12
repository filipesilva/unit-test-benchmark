import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5138Component } from './my-comp-5138.component';

describe('MyComp5138Component', () => {
  let component: MyComp5138Component;
  let fixture: ComponentFixture<MyComp5138Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5138Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
