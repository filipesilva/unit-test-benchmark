import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5495Component } from './my-comp-5495.component';

describe('MyComp5495Component', () => {
  let component: MyComp5495Component;
  let fixture: ComponentFixture<MyComp5495Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5495Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5495Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
