import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5809Component } from './my-comp-5809.component';

describe('MyComp5809Component', () => {
  let component: MyComp5809Component;
  let fixture: ComponentFixture<MyComp5809Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5809Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5809Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
