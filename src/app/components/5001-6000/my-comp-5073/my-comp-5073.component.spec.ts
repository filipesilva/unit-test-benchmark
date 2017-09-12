import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5073Component } from './my-comp-5073.component';

describe('MyComp5073Component', () => {
  let component: MyComp5073Component;
  let fixture: ComponentFixture<MyComp5073Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5073Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5073Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
